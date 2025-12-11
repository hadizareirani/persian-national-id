# Persian National ID

[![npm version](https://badge.fury.io/js/persian-national-id.svg)](https://www.npmjs.com/package/persian-national-id)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/persian-national-id.svg)](https://www.npmjs.com/package/persian-national-id)

A TypeScript/JavaScript package for validating and generating Persian (Iranian) national ID numbers (کد ملی).

## Features

- ✅ Validate Persian national ID numbers
- ✅ Generate valid Persian national ID numbers
- ✅ Full TypeScript support with type definitions
- ✅ Supports both ESM and CommonJS
- ✅ Zero dependencies
- ✅ Lightweight

## Installation

```bash
npm install persian-national-id
```

## Usage

### ESM (ES Modules)

```typescript
import { ValidNationalId, GenerateNationalId } from "persian-national-id";

// Validate a national ID
const isValid = ValidNationalId("0959744487");
console.log(isValid); // true

// Generate a valid national ID
const nationalId = GenerateNationalId();
console.log(nationalId); // e.g., '0959744487'
```

### CommonJS

```javascript
const { ValidNationalId, GenerateNationalId } = require("persian-national-id");

// Validate a national ID
const isValid = ValidNationalId("1234567890");
console.log(isValid); // false

// Generate a valid national ID
const nationalId = GenerateNationalId();
console.log(nationalId); // e.g., '0959744487'
```

## API

### `ValidNationalId(nationalId: string): boolean`

Validates a Persian national ID number.

**Parameters:**

- `nationalId` (string): The national ID to validate (10 digits)

**Returns:**

- `boolean`: `true` if valid, `false` otherwise

**Example:**

```typescript
ValidNationalId("0959744487"); // true
ValidNationalId("1234567890"); // false
ValidNationalId("0000000000"); // false
```

### `GenerateNationalId(): string`

Generates a valid Persian national ID number.

**Returns:**

- `string`: A valid 10-digit national ID

**Example:**

```typescript
const id = GenerateNationalId();
console.log(id); // e.g., '0959744487'
```

## Contributing

Contributions are welcome! This is an open-source project.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hz-irani/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/HadiZareIrani)
