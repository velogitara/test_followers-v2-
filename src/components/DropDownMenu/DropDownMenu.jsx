import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Btn } from './DropDownMenu.styled';
import { update } from 'redux/followSlice';
import { useDispatch } from 'react-redux';

export default function BasicMenu() {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async e => {
    await setAnchorEl(null);
    switch (e.target.innerText) {
      case 'follow':
        await dispatch(update(false));
        break;
      case 'followings':
        await dispatch(update(true));

        break;
      case 'show all':
        await dispatch(update('show all'));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Btn
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Filter
      </Btn>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>show all</MenuItem>
        <MenuItem onClick={handleClose}>follow</MenuItem>
        <MenuItem onClick={handleClose}>followings</MenuItem>
      </Menu>
    </div>
  );
}
