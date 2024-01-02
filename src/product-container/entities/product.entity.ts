import { ProductBaseEntity } from '../../product-global';
import { IProductContainer } from '../interfaces';

export class ProductContainerEntity extends ProductBaseEntity implements IProductContainer {
  // #region Properties (5)

  public cest: string | null = null;
  public containerId: string = '';
  public customEAN: string = '';
  public exTipi: string = '';
  public sku: string = '';

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<ProductContainerEntity>) {
    super(data);
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
