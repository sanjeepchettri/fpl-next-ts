'use client'

import React, {useEffect, useState} from 'react'
import { Progress } from "@/components/ui/progress"

const loading = () => {
    const [progress, setProgress] = useState(13)
    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    return(
      <div className="flex justify-center items-center h-screen w-screen">
            <Progress value={progress} className=" w-[60%] " />

      </div>
  )
}

export default loading
