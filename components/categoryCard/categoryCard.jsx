import { Button , Card , Text} from '@nextui-org/react';

const CategoryCard = (props) => {
  return (
    <Card css={{ w: "25vw", h: "40vh" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Text h3 color="black" weight='bold' css={{backgroundColor: 'White' , borderRadius:'10px' , padding:'1%'}}>
                {props.category.name || 'Category Name'}
            </Text>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
        <Card.Image
            src={props.category.img || "https://nextui.org/images/card-example-5.jpeg"}
            objectFit="fill"
            autoResize
            alt="Relaxing app background"
        />
        </Card.Body>
        <Card.Footer
        isBlurred
        css={{
            position: "absolute",
            // bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
        }}
        >
        <h3>{props.category.number_courses} Courses</h3>
        </Card.Footer>
    </Card>
  )
}

export default CategoryCard