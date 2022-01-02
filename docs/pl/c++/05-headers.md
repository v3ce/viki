# 05 Headers

- `#pragma once` (header guard) only include this file once. Prevent us to include a single file multiple times in a single translation unit.

- `log.h`

```cpp
#pragma once

void log(const char* msg);
```

```cpp
#ifndef _LOG_H
#define _LOG_H

void log(const char* msg);

#endif
```

## `#include` directories

- `"$FILE_NAME"`: everything; in convention, relative to current directory
- `<$FILE_NAME>`: in one of include directories

## C/C++ style header file

```
#include <stdlib.h> // has .h
#include <iostream> // no .h
```
