import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(
  request: NextRequest,
  { params }: { params: { owner: string; repo: string } }
) {
  try {
    if (!process.env.GITHUB_TOKEN) {
      return NextResponse.json({ error: 'GitHub token not configured' }, { status: 500 })
    }

    const { owner, repo } = params
    const path = request.nextUrl.searchParams.get('path') || ''
    const ref = request.nextUrl.searchParams.get('ref') || 'main'

    // Construct GitHub API URL for repository contents
    const apiUrl = path
      ? `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${ref}`
      : `https://api.github.com/repos/${owner}/${repo}/contents?ref=${ref}`

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ error: 'File or directory not found' }, { status: 404 })
      }
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const data = await response.json()

    // If it's a single file, return the file content
    if (data.type === 'file') {
      return NextResponse.json({
        type: 'file',
        name: data.name,
        path: data.path,
        size: data.size,
        content: {
          content: data.content,
          encoding: data.encoding
        },
        download_url: data.download_url
      })
    }

    // If it's a directory, return the contents list
    if (Array.isArray(data)) {
      return NextResponse.json({
        type: 'dir',
        contents: data.map((item: any) => ({
          name: item.name,
          path: item.path,
          type: item.type,
          size: item.size,
          download_url: item.download_url
        }))
      })
    }

    return NextResponse.json({ error: 'Unexpected response format' }, { status: 500 })
  } catch (error) {
    console.error('Error fetching GitHub repository content:', error)
    return NextResponse.json({ error: 'Failed to fetch repository content' }, { status: 500 })
  }
}