import { expect } from "vitest"

export function arrayContains(obj: unknown) {
    return expect.arrayContaining([expect.objectContaining(obj)])
}
