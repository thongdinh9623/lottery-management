import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <fieldset>
        <legend>Chọn quy tắc chẵn lẻ:</legend>

        <div>
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales">2 chẵn 4 lẻ</label>
        </div>

        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label htmlFor="horns">3 chẵn 3 lẻ</label>
        </div>

        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label htmlFor="horns">4 chẵn 2 lẻ</label>
        </div>
      </fieldset>

      <br />
      <button>Sinh số</button>
    </main>
  )
}
