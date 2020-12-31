import * as React from "react"

export function transformText(text: string): JSX.Element[] {
  return text.split('\n').map((l, i) => (<p key={i}>{l.trim()}</p>))
}

export default {}
