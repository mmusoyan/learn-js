## values:
- primitive values:
  - 21
  - 3.14
  - "Hello, world!"
  - true
  - false
  - null
  - undefined

- non-primitive values:
  - ["yellow", "red", "green"] - упорядоченный список
  - {name: "Anne", age: 27} - именной список


## var, let, const
- `var favoriteColor = "red"`
- `const species = "human"`
- `let age = 16`

#### variable names are case sensitive:
- favoriteColor and favoritecolor are different variables
#### variable names can contain:
- letters( a-z )
- digits( 0-9 )
- underscores( _ )
- dollar signs ( $ )
#### variable names cannot begin with a number
#### variable names cannot be reserved words (e.g. key, number, false)

## string
- "hello"
- 'hello'
- \`hello, ${species}\`

## number
- Number.MAX_VALUE
- Number.MIN_VALUE

## boolean
- true
- false
- falsy
  - false
  - null
  - undefined
  - 0
  - -0
  - NaN
  - ""
- truthy:
   - everything else, including [], {}

## absence of a value
- undefined
- null

## array
- the index is the address
- elements can be any value type

## object
- the property name (key) is the address
- elements can be any value type

## value assignment vs reference assignment