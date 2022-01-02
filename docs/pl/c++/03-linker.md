# 03 Linker

> Find where each symbol and function is.

- Build = Compilation + Linking
- It's important to know the error comes from what stage
  - e.g. `LNK2019: unresolved external symbol` comes from linking stage
- We can specify our custom entry point (not necessary to be `int main()`, it's just convention.
- `static`: this funtion only be used in this translation unit

## Error Examples

- `log.cpp`

```cpp
#include <iostream>

// mispelled
void Logr(const char* msg) {
  std::cout << msg << std::endl;
}
```

- `main.cpp`

```cpp
#include <iostream>

void Log(const char* msg);

// add static in the following function to make this function only
// declared for this translation unit (main.cpp), so that if we
// don't call it inside `main.cpp`, we won't get linking error
int multiply(int a, int b) {
  // Linking error because `Log(char const *)` is not defined.
  // if we comment the following line, because we never call
  // `Log(char const *)`, linker has nothing to do, so no
  // linking error.
  Log("multiply");
  return a * b;
}

int main() {
  // if we comment the following line, we still got linking
  // because multiply(int, int) might be called somewhere else
  std::cout << multiply(2, 3) << std::endl;
}
```

## Some issue with `#include`

Remember what `include` actually does is copying and pasting, so that if we include the same function in two different files, we'll end up have duplicate definition, causing linking error.

### Fix 1

Add `static` before the function to be included. Essentially each translation unit now has their **own version** of the function.

### Fix 2

Add `inline` to essentially replace the text.

### Fix 3 (Better)

Move the declaration into one of the existing translation unit.
