interface AddressProps {
  address: string;
  province?: string;
  district?: string;
  subDistrict?: string;
  urbanVillage?: string;
  postalCode?: string;
}

export const fFullAddress = (props: AddressProps) => {
  const { address, province, district, subDistrict, urbanVillage, postalCode } = props;

  const label = [address]
    .concat(
      urbanVillage ? [urbanVillage] : [],
      subDistrict ? [subDistrict] : [],
      district ? [district] : [],
      province ? [province] : []
    )
    .join(', ');

  return `${label}${postalCode ? ` ${postalCode}` : ''}`;
};
