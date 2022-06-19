import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode[] | ReactNode
}

const Layout: React.FC = ({ children }: Props) => {
  return <div className="layout">{children}</div>
}

export default Layout
