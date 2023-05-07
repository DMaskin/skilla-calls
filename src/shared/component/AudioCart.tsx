import React, { useState } from "react"
import download from "../icon/AudioCart/download.svg"
import { fetchAudio } from "../../feature/CallTable/callTableAPI"
import play from "../icon/AudioCart/play.svg"
import stop from "../icon/AudioCart/stop.svg"
import deleteIcon from "../icon/AudioCart/delete.svg"

interface AudioCartProps {
  time: string
  id: string
}

export function AudioCart({ time, id }: AudioCartProps) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean | null>(null)

  function clickHandler() {
    if (isPlaying) {
      audio?.pause()
      setIsPlaying(false)
    }
    if (!isPlaying) {
      audio?.play()
      setIsPlaying(true)
    }
    if (isPlaying === null) {
      fetchAudio(id).then((res) => {
        const blob = new Blob([res], { type: "audio/mp3" })
        const downloadUrl = window.URL.createObjectURL(blob)
        let audio = new Audio(downloadUrl)
        setAudio(audio)
        setIsPlaying(true)
        audio?.play().finally(() => {
          window.URL.revokeObjectURL(downloadUrl)
        })
      })
    }
  }

  return (
    <div className=" w-[352px] h-[48px] rounded-[48px] bg-[#EAF0FA] flex justify-center items-center hidden group-hover-[.call]:flex">
      <span className="text-[#122945] text-[14px] mr-3">{time}</span>
      <img src={isPlaying === null || !isPlaying ? play : stop} onClick={clickHandler} alt="" className="mr-2" />
      <div className="w-[164px] h-[4px] bg-[#ADBFDF] mr-[18px]" />
      <div className="flex justify-center gap-[10px]">
        <img src={download} alt="" />
        <img src={deleteIcon} alt="" className={isPlaying ? "visible" : "invisible"}/>
      </div>
    </div>
  )
}
