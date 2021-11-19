import { MongooseModule } from '@nestjs/mongoose';

export const useMongooseConnect = (x, y) => {
  return MongooseModule.forFeature([{ name: x.name, schema: y }]);
};
