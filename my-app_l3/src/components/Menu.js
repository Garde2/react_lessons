import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Nav() {
  return (
    <div>
      <ButtonGroup aria-label="outlined primary button group">
        <Button>Каталог</Button>
        <Button>Главная</Button>
        <Button>Контакты</Button>
      </ButtonGroup>
      <Switch {...label} defaultChecked />
    </div>
  );
}
