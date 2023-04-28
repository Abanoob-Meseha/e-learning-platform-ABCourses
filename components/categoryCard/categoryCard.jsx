import { Button , Card , Text} from '@nextui-org/react';
import styles from './categoryCard.module.scss'

const CategoryCard = (props) => {
  return (
    <Card className={styles.categoryCard}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Text h3 color="black" weight='bold' css={{backgroundColor: 'White' , borderRadius:'10px' , padding:'1%'}}>
                {props.category.name || 'Category Name'}
            </Text>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
        <Card.Image
            src={props.category.img || "/assets/TLOGO.png"}
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