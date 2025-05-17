function Title({ t1, t2, left, className }) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      {left && <hr className="w-[4vw] border-2 border-orange-400" />}

      <span className="text-gray-400">{t1}</span>
      <span className="text-gray-800">{t2}</span>

      {!left && <hr className="w-[4vw] border-2 border-orange-400" />}
    </div>
  )
}

export default Title
