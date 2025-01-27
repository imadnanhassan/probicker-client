import { JSX } from 'react';
import { RouteObject } from 'react-router-dom'

export const routeGenerator = (
  paths: { path: string; element: JSX.Element }[],
): RouteObject[] => {
  return paths.map(pathObj => ({
    path: pathObj.path,
    element: pathObj.element,
  }))
}
