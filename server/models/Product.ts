import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';
import { AttributeValueAttributes, AttributeValueInstance } from './AttributeValue';
import { CategoryAttributes, CategoryInstance } from './Category';
import { RatingAttributes, RatingInstance } from './Rating';
import { ReviewAttributes, ReviewInstance } from './Review';

export interface ProductAttributes {
  id?: number;
  name: string;
  discount_percent: string;
  price: string;
  gender: string;
  brand: string;
  attribute: string;
  quantity: string;
  description: string;
  pictures: string;
  shopId: string;
  category_id: string;
  review: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductInstance extends Sequelize.Instance<ProductAttributes>, ProductAttributes {
  // attribute value
  getProductIds: Sequelize.BelongsToManyGetAssociationsMixin<AttributeValueInstance>;
  setProductIds: Sequelize.BelongsToManySetAssociationsMixin<AttributeValueInstance,
  AttributeValueInstance['id'], 'ProductAttribute'>;
  addProductIds: Sequelize.BelongsToManyAddAssociationsMixin<AttributeValueInstance,
  AttributeValueInstance['id'], 'ProductAttribute'>;
  addProductId: Sequelize.BelongsToManyAddAssociationMixin<AttributeValueInstance,
  AttributeValueInstance['id'], 'ProductAttribute'>;
  createProductId: Sequelize.BelongsToManyCreateAssociationMixin<AttributeValueAttributes,
  AttributeValueInstance['id'], 'ProductAttribute'>;
  removeProductIds: Sequelize.BelongsToManyRemoveAssociationMixin<AttributeValueInstance,
  AttributeValueInstance['id']>;
  removeProductId: Sequelize.BelongsToManyRemoveAssociationsMixin<AttributeValueInstance,
  AttributeValueInstance['id']>;
  hasProductId: Sequelize.BelongsToManyHasAssociationMixin<AttributeValueInstance,
  AttributeValueInstance['id']>;
  hasProductIds: Sequelize.BelongsToManyHasAssociationsMixin<AttributeValueInstance,
  AttributeValueInstance['id']>;
  countProductIds: Sequelize.BelongsToManyCountAssociationsMixin;

  // category
  getCategoryIds: Sequelize.BelongsToManyGetAssociationsMixin<CategoryInstance>;
  setCategoryIds: Sequelize.BelongsToManySetAssociationsMixin<CategoryInstance,
  CategoryInstance['id'], 'ProductCategory'>;
  addCategoryIds: Sequelize.BelongsToManyAddAssociationsMixin<CategoryInstance,
  CategoryInstance['id'], 'ProductCategory'>;
  addCategoryId: Sequelize.BelongsToManyAddAssociationMixin<CategoryInstance,
  CategoryInstance['id'], 'ProductCategory'>;
  createCategoryId: Sequelize.BelongsToManyCreateAssociationMixin<CategoryAttributes,
  CategoryInstance['id'], 'ProductCategory'>;
  removeCategoryIds: Sequelize.BelongsToManyRemoveAssociationMixin<CategoryInstance,
  CategoryInstance['id']>;
  removeCategoryId: Sequelize.BelongsToManyRemoveAssociationsMixin<CategoryInstance,
  CategoryInstance['id']>;
  hasCategoryId: Sequelize.BelongsToManyHasAssociationMixin<CategoryInstance,
  CategoryInstance['id']>;
  hasCategoryIds: Sequelize.BelongsToManyHasAssociationsMixin<CategoryInstance,
  CategoryInstance['id']>;
  countCategoryIds: Sequelize.BelongsToManyCountAssociationsMixin;

  // review
  getReviewIds: Sequelize.BelongsToManyGetAssociationsMixin<ReviewInstance>;
  setReviewIds: Sequelize.BelongsToManySetAssociationsMixin<ReviewInstance,
  ReviewInstance['id'], 'ProductReview'>;
  addReviewIds: Sequelize.BelongsToManyAddAssociationsMixin<ReviewInstance,
  ReviewInstance['id'], 'ProductReview'>;
  addReviewId: Sequelize.BelongsToManyAddAssociationMixin<ReviewInstance,
  ReviewInstance['id'], 'ProductReview'>;
  createReviewId: Sequelize.BelongsToManyCreateAssociationMixin<ReviewAttributes,
  ReviewInstance['id'], 'ProductReview'>;
  removeReviewIds: Sequelize.BelongsToManyRemoveAssociationMixin<ReviewInstance,
  ReviewInstance['id']>;
  removeReviewId: Sequelize.BelongsToManyRemoveAssociationsMixin<ReviewInstance,
  ReviewInstance['id']>;
  hasReviewId: Sequelize.BelongsToManyHasAssociationMixin<ReviewInstance,
  ReviewInstance['id']>;
  hasReviewIds: Sequelize.BelongsToManyHasAssociationsMixin<ReviewInstance,
  ReviewInstance['id']>;
  countReviewIds: Sequelize.BelongsToManyCountAssociationsMixin;

  // rating
  getRatingIds: Sequelize.BelongsToManyGetAssociationsMixin<RatingInstance>;
  setRatingIds: Sequelize.BelongsToManySetAssociationsMixin<RatingInstance,
  RatingInstance['id'], 'ProductRating'>;
  addRatingIds: Sequelize.BelongsToManyAddAssociationsMixin<RatingInstance,
  RatingInstance['id'], 'ProductRating'>;
  addRatingId: Sequelize.BelongsToManyAddAssociationMixin<RatingInstance,
  RatingInstance['id'], 'ProductRating'>;
  createRatingId: Sequelize.BelongsToManyCreateAssociationMixin<RatingAttributes,
  RatingInstance['id'], 'ProductRating'>;
  removeRatingIds: Sequelize.BelongsToManyRemoveAssociationMixin<RatingInstance,
  RatingInstance['id']>;
  removeRatingId: Sequelize.BelongsToManyRemoveAssociationsMixin<RatingInstance,
  RatingInstance['id']>;
  hasRatingId: Sequelize.BelongsToManyHasAssociationMixin<RatingInstance,
  RatingInstance['id']>;
  hasRatingIds: Sequelize.BelongsToManyHasAssociationsMixin<RatingInstance,
  RatingInstance['id']>;
  countRatingIds: Sequelize.BelongsToManyCountAssociationsMixin;
}

export const ProductFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<ProductInstance, ProductAttributes> => {
  const attributes: SequelizeAttributes<ProductAttributes> = {
    name: { type: DataTypes.STRING },
    discount_percent: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    brand: { type: DataTypes.STRING },
    attribute: { type: DataTypes.STRING },
    quantity: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    pictures: { type: DataTypes.STRING },
    shopId: { type: DataTypes.STRING },
    category_id: { type: DataTypes.STRING },
    review: { type: DataTypes.STRING },
  };

  const Product = sequelize.define<ProductInstance, ProductAttributes>('Product', attributes);

  Product.associate = (models) => {
    Product.belongsToMany(models.AttributeValue, {
      through: 'ProductAttribute',
    });
    Product.belongsToMany(models.Category, {
      through: 'ProductCategory',
    });
    Product.belongsToMany(models.Review, {
      through: 'ProductReview',
    });
    Product.belongsToMany(models.Rating, {
      through: 'ProductRating',
    });
  };

  return Product;
};
