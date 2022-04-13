import './CardItem.css';

function CardItem() {
  return (
    <div class="card-item">
      <span class="declaration-variable">let</span>{' '}
      <span class="card-item-container">container</span> ={' '}
      <span class="card-item-value">1 + 2</span>
    </div>
  );
}

export default CardItem;
