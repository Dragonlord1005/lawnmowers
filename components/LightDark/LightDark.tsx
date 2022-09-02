import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'


export default function LightDark() {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    return (
        <div>
            <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
        </div>
    )
}