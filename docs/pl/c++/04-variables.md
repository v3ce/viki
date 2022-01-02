# 04 Variables

- Each data type has their purpose. However, you don't actually need to use in that purpose.
- The only difference between each primitive data type is "how big they are?"
- The actual size of a data type depends on compiler.
- Traditionally, `int` is four bytes and it can store range of $$[-2^{31}, 2^{31} - 1],$$ where 31 comes from 32 bits and one of the bits is used to store the sign.
- `bool` takes one byte because even it essentially only used one bit. This is because there is no way for us to deal with individual bit. However, we can store eight `bool`s in one single byte.
