class LRUCache {
  constructor(size) {
    this.size = size
    this.map = new Map()
  }

  get(key) {
    const hasKey = this.map.has(key)
    if (!hasKey) {
      return -1
    } else {
      const val = this.map.get(key)
      this.map.delete(key)
      this.map.set(key, value)
      return val
    }
  }

  set(key, value) {
    const hasKey = this.map.has(key)
    if (hasKey) {
      this.map.delete(key)
    }
    this.map.set(key, value)

    if (this.map.size > this.size) {
      this.map.delete(this.map.keys().next().value)
    }
  }
}

// 迭代器验证
