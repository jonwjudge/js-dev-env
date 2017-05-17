export const schema = {
  "type": "object",
  "properties": {
    "nodes": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "node": {
            "type": "number",
            "unique": true,
            "minimum": 1
          }
        },
        "required": ["id", "node"]
      }
    }
  },
  "required": ["nodes"]
};
