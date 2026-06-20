export function parseTrailingJson(output) {
  let depth = 0;
  let start = -1;
  let lastComplete = null;
  let inString = false;
  let escaped = false;

  for (let index = 0; index < output.length; index += 1) {
    const char = output[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === '{') {
      if (depth === 0) start = index;
      depth += 1;
    } else if (char === '}' && depth > 0) {
      depth -= 1;
      if (depth === 0 && start !== -1) {
        lastComplete = { start, end: index };
        start = -1;
      }
    }
  }

  if (!lastComplete || output.slice(lastComplete.end + 1).trim()) return null;

  try {
    return JSON.parse(output.slice(lastComplete.start, lastComplete.end + 1));
  } catch {
    return null;
  }
}
