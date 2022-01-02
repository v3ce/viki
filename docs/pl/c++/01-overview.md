---
sidebar_position: 1
---

# 01 Overview of C++

## Difference between C++ and Java/C#

- C++ compiled code
- Java/C# runs on VM → slower

## How C++ Works

- Think `<<` like a functino call.
  - e.g.: Think `std::cout << "Hello World!"` like `std::cout.print("Hello World!")`
- Any line starts with a `#` is called a preprocessing statement, they are preprocessed before the file is compiled.
- Only .cpp files are compiled.
  - .cpp (compiler) → obj files (linker) → one executable file

## Decorations & Definition

- **Decoration**: hey, this function exists: compiler just trusts you
- **Definition**: this is what this function is

E.g. Has decoration but no definition: can be compiled, but linker will complain.
