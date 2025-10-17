/**
 * Copyright (c) 2018 Jed Watson.
 * Licensed under the MIT License (MIT), see:
 *
 * @link http://jedwatson.github.io/classnames
 */

type ClassNamesArg = undefined | string | Record<string, boolean> | ClassNamesArg[];

/**
 * A simple JavaScript utility for conditionally joining classNames together.
 *
 * @param args A series of classes or objects whose keys are class names and values
 * determine whether the class should be included in the final string.
 */
export function classNames(...args: ClassNamesArg[]): string {
  let classes = '';

  for (const arg of args) {
    classes = appendClass(classes, parseValue(arg));
  }

  return classes.trim();
}

function parseValue(arg: ClassNamesArg): string {
  if (typeof arg === 'string' || typeof arg === 'number') {
    return String(arg);
  }

  if (typeof arg !== 'object' || arg === null) {
    return '';
  }

  if (Array.isArray(arg)) {
    return classNames(...arg);
  }

  let classes = '';
  for (const key in arg) {
    if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
      classes = appendClass(classes, key);
    }
  }

  return classes;
}

function appendClass(value: string, newClass: string | undefined): string {
  if (!newClass) return value;
  return value ? `${value} ${newClass}` : newClass;
}
 