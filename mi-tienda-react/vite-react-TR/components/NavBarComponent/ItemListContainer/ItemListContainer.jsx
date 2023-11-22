const ItemListContainer = ({greeting}) => {
    const greetingStyles = {
        fontSize: '3rem',
        fontWeight: '700',
        textAlign: 'center',
        color: '#f4f4f4'
    }
    return(
        <div>
            style={{
                display:"flex",
                flexWrap:"wrap",
                width:"100vw",
                justifyContent:"space-around",
            }}

            {products.map((product) => {
                return(
                    <Card 
                    key={product.id}
                    style={{ width: "18rem", margin: 20, height: "500px" }}
                    >
                     <Card.img variant="top" src={product.thumbnail} />
                     <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                     </Card.Body>
                    </Card>
                ); 
            })}
        </div>
    )
}

export default ItemListContainer