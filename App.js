import {getImageUrl} from '/.utils.js';

function Avatar(props) {
  return (
    let person = props.person;
    let size = props.size;
}

export default function Profile() {
  return (
    <div>
      <Avatar
      size={100}
      person={{
        name:'Katsuko Saruhashi',
        Imageid:'Yfe0qp2'
      }}
      />
    <Avatar
      size={80}
      person={{
      name:'Akalilu Lemma'
      imageId: 'OKS67lh'
      }}
      />
      <Avatar
      size={50}
      person={{
        name= 'Lin Lanying',
        imageId:'1bX5QH6'
      }}
      />
    </div>
  );
}