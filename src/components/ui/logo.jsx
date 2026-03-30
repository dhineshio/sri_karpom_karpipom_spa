import React from 'react'
import { Link } from 'react-router-dom'
import logo from "@/assets/images/logo.png"
import { cn } from '@/lib/utils'

const Logo = ({ className }) => {
  return (
    <Link to="/" className="flex items-center gap-1">
      <img src={logo} alt="img" width={320} />
    </Link>
  )
}

export default Logo