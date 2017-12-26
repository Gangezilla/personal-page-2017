import glamorous from 'glamorous';
import LogoSG from '../../Images/logo.png';

export const CollapsibleContainer = glamorous.div({
  maxWidth: '800px',
});

export const Logo = glamorous.div({
  background: `url(${LogoSG})`,
  height: '150px',
  width: '150px',
  backgroundPositionX: 'center',
  backgroundPositionY: 'center',
  backgroundSize: '150px',
});
