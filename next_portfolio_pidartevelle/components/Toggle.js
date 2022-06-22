import s from "../styles/Toggle.module.css";

export const Toggle = () => {
  return (
    <div className={s.t}>
      <div className={s.t_icon}>DM</div>
      <div className={s.t_icon}>NM</div>
      <div className={s.t_button}></div>
    </div>
  );
};
