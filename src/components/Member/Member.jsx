import PropTypes from 'prop-types';

function Member({ member }) {
  const {name, image} = member;
  return (
    <div>
      <div className="avatar flex flex-col justify-center items-center gap-4">
          <div className="w-44 rounded-full">
            <img src={image} />
          </div>
          <h5 className="text-2xl font-semibold">{name}</h5>
        </div>
    </div>
  )
}

Member.propTypes = {
  member: PropTypes.object,
}


export default Member;
