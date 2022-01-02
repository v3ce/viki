---
sidebar_position: 2
---

# 02 Compiler

> The compiler will take our source files and output an object file which contains machine code and any other constant data that we've defined.

> After we got these object files, we can **link** 'em into one executable, which contains all machine code that we actually need to run.

## Preprocess

- First, compiler goes through each preprocessing statement (starts with `#`), and evaluate 'em.
- `#include <$FILE_NAME>`: open `$FILE_NAME`, read all content, paste all content.
- `#define Integer int`: replace all `int` with `Integer`
- Compiler generates `*.obj` for each `*.cpp`. A file is just a source text to be fed into the compiler.
  Files have no meaning.

## Translation Unit

$n$ cpp files without including each other: $n$ translation units.
$n$ cpp files with one cpp files including each other: $1$ translation unit.

## Why not write redundant code?

> obj file contains machine code.

### Bad example

```cpp
int multiply(int a, int b) {
  int res = a * b;
  return res;
}
```

will be compiled to:

```
// load the variable to eax register
mov  eax, DWORD PTR _a$[ebp]

// perform multiplication with the variable in the register and b variable
imul eax, DWORD PTR _b$[ebp]

// store the multiplied value of the register to a variable called result (redundant)
mov  DWORD PTR _res$[ebp], eax

// load the variable back to eax register (redundant)
mov  eax, DWORD PTR _res$[ebp]
```

### Good example

```cpp
int multiply(int a, int b) {
  return a * b;
}
```

will be compiled to:

```
mov  eax, DWORD PTR _a$[ebp]
imul eax, DWORD PTR _b$[ebp]
```

Much cleaner!

### Constant folding

```cpp
int multiply() {
  return 2 * 5;
}
```

will be compiled to:

```
mov  eax, 10
```
