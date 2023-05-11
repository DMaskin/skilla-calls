import React, { useRef, useState } from "react"
import { fetchAudio } from "../../feature/CallTable/callTableAPI"
import play from "../icon/AudioCart/play.svg"
import stop from "../icon/AudioCart/stop.svg"
import { ReactComponent as DownloadSVG } from "../icon/AudioCart/download.svg"
import { ReactComponent as DeleteSVG } from "../icon/AudioCart/delete.svg"

export function AudioCart({ time, id }: { time: string; id: string }) {
  const [isPlay, setIsPlay] = useState<boolean | null>(null)
  let [duration, setDuration] = useState<string>()
  const [percentage, setPercentage] = useState<number>(0)
  const audioItem = useRef<any>()

  const timeUpdateHandler = () => {
    let date = new Date(audioItem.current.currentTime * 1000)
    setDuration(date.getMinutes() + ":" + date.getSeconds())
  }

  function endHandler() {
    setIsPlay(!isPlay)
    audioItem.current.load()
  }

  function initPlayer() {
    fetchAudio(id).then((res) => {
      const blob = new Blob([res], { type: "audio/mp3" })
      const downloadUrl = window.URL.createObjectURL(blob)
      let audio = new Audio(downloadUrl)
      audio.ontimeupdate = timeUpdateHandler
      audio.onended = endHandler
      audioItem.current = audio
      setIsPlay(true)
      audioItem.current.play().finally(() => {
        window.URL.revokeObjectURL(downloadUrl)
      })
    })
  }

  function playHandler() {
    if (isPlay === null) {
      initPlayer()
      return
    }
    setIsPlay(!isPlay)
    isPlay ? audioItem.current.pause() : audioItem.current.play()
  }

  function changeHandler(event: any) {
    setPercentage(event.target.value)
    audioItem.current.currentTime = (audioItem.current?.duration / 100) * event.target.value
  }

  return (
    <div className="relative w-[352px] h-[48px] rounded-[48px] bg-[#EAF0FA] flex justify-center items-center hidden group-hover:flex">
      <audio ref={audioItem} />
      <span className="text-[#122945] text-[14px] mr-3">{duration ? duration : time}</span>
      <img src={isPlay === null || !isPlay ? play : stop} onClick={playHandler} alt="" className="mr-2" />
      <progress
        className="w-[164px] h-[4px] rounded-[50px]"
        max={audioItem.current?.duration}
        value={audioItem.current?.currentTime}
      />
      <input
        className="absolute w-[164px] h-[4px] left-[105px] opacity-0"
        type="range"
        onChange={changeHandler}
        value={
          !audioItem.current?.currentTime ? 0 : (audioItem.current?.currentTime / audioItem.current?.duration) * 100
        }
      />
      <div className="flex justify-center gap-[10px]">
        <div className="[&_path]:hover:fill-[#002CFB]">
          <DownloadSVG />
        </div>
        <div className={"[&_path]:hover:fill-[#002CFB] " + (isPlay ? "visible" : "invisible")}>
          <DeleteSVG />
        </div>
      </div>
    </div>
  )
}
