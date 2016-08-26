# SandStorage

This is a Web Storage manager supporting expiration time.

## SandStorage.available(type)

### Parameters

- type(*String*): "localStorage"(default) or "sessionStorage"

### Returns

(*Boolean*): Returns Web Storage is supported.

## SandStorage.setItem(key, value, options)

When passed a key/value pair, set that pair.

### Parameters

- key(*String*): The name of the key you want to create or update.
- value(*String*): The value of the key/value pair.
- options(*Object*): The options object.

#### options

Name|Values|Description
----|------|-----------
type|"localStorage"(default), "sessionStorage"|Web Storage type
from|UTC timestamp in milliseconds|start time of valid period
to|UTC timestamp in milliseconds|end time of valid period

### Returns

No return value. If Web Storage is not supported or expired, null is returned.

## SandStorage.getItem(key, options)

When passed a key, will return that key's value.

### Parameters

- key(*String*): The name of the key you want to retrieve.
- options(*Object*): The options object.

#### options

Name|Values|Description
----|------|-----------
type|"localStorage"(default), "sessionStorage"|Web Storage type

### Returns

The value of the key/value pair. If Web Storage is not supported or expired, null is returned.

## SandStorage.removeItem(key, options)

When passed a key, will delete a key/value pair.

### Parameters

- key(*String*): The name of the key you want to retrieve.
- options(*Object*): The options object.

#### options

Name|Values|Description
----|------|-----------
type|"localStorage"(default), "sessionStorage"|Web Storage type

### Returns

No return value. If Web Storage is not supported or expired, null is returned.

## LICENSE

MIT
