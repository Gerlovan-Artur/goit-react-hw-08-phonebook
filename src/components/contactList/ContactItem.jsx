import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import { MdClose } from 'react-icons/md';
import { ButtonDel } from './ContactItem.style';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <p>
        {' '}
        <ButtonDel type="button"
          onClick={handleDelete}>
         <MdClose style={{ color: 'red'}} size={17}/>
        </ButtonDel>
        {name} : {number}
      </p>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};