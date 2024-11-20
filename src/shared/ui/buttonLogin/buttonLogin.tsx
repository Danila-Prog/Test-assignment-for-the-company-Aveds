import { TButtonLogin } from "../../types/TButtonLogin"
import { handleLogOut } from "../../../features/handleLogOut"
import { checkingEntry } from "../../utils/checkingEntry"

export const ButtonLogin = ({className, setIsModal}: TButtonLogin) => {
    return (
        <button
          onClick={() => (!checkingEntry ? setIsModal() : handleLogOut())}
          className={className}
        >
          {checkingEntry ? "Выйти" : "Войти"}
        </button>
    )
}