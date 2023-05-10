import React, {useRef, useState} from "react"
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
  const [isPlay, setIsPlay] = useState<boolean | null>(null)
  let [duration, setDuration] = useState<string>()
  const [percentage, setPercentage] = useState<number>(0)
  const [currTime, setCurrTime] = useState(0)
  const audioItem = useRef<any>()

  function loadAudio() {
    fetchAudio(id).then((res) => {
      const blob = new Blob([res], { type: "audio/mp3" })
      const downloadUrl = window.URL.createObjectURL(blob)
      let audio = new Audio(downloadUrl)
      audio.ontimeupdate = () => {
        setCurrTime(audio.currentTime)
      }
      audioItem.current = audio
      setIsPlay(true)
      audioItem.current.play().finally(() => {
        window.URL.revokeObjectURL(downloadUrl)
      })
    })
  }

  function playHandler() {
    console.log("play handler")
    if (isPlay === null) {
      loadAudio()
      return
    }
    setIsPlay(!isPlay)
    isPlay ? audioItem.current.pause() : audioItem.current.play()
  }

  function endHandler() {
    setIsPlay(!isPlay)
    audioItem.current.load()
  }

  function changeHandler(event: any) {
    setPercentage(event.target.value)
    audioItem.current.currentTime = (audioItem.current?.duration / 100) * event.target.value
  }

  const timeUpdateHandler = () => {
    let date = new Date(audioItem.current.currentTime * 1000)
    setDuration(date.getMinutes() + ":" + date.getSeconds())
  }

  return (
    <div className="relative w-[352px] h-[48px] rounded-[48px] bg-[#EAF0FA] flex justify-center items-center hidden group-hover-[.call]:flex">
      <audio ref={audioItem} onTimeUpdate={timeUpdateHandler} onEnded={endHandler}></audio>
      <span className="text-[#122945] text-[14px] mr-3">{time}</span>
      <img src={isPlay === null || !isPlay ? play : stop} onClick={playHandler} alt="" className="mr-2" />
      <progress
        className="w-[164px] h-[4px]"
        max={audioItem.current?.duration}
        value={audioItem.current?.currentTime}
      />
      <input
        className="absolute w-[164px] left-[105px] opacity-0"
        type="range"
        onChange={changeHandler}
        value={
          !audioItem.current?.currentTime ? 0 : (audioItem.current?.currentTime / audioItem.current?.duration) * 100
        }
      />
      <div className="flex justify-center gap-[10px]">
        <img src={download} alt="" />
        <img src={deleteIcon} alt="" className={isPlay ? "visible" : "invisible"} />
      </div>
    </div>
  )
}
