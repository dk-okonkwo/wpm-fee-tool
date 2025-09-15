import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/updates')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/updates"!</div>
}
