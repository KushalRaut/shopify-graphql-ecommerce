import React, { ReactNode } from 'react'
import s from './Layout.module.css'

interface Props {
  children?: ReactNode[] | ReactNode
}

const Layout: React.FC = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <main className="fit">{children}</main>
    </div>
  )
}

export default Layout
