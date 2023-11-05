

export default function LabelSettings({ onChangeCb }: { onChangeCb: (newLabel: string) => void }) {
    return <div><input onChange={(e) => onChangeCb(e.target.value)} placeholder="Label.." type="text" name="" id="" /></div>
}