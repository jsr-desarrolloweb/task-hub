import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Task extends Model {
    toJSON() {
      // hide protected fields
      const attributes = { ...this.get() };
      return attributes;
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Task.init({
    name: DataTypes.STRING,
    isChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        args: false,
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};