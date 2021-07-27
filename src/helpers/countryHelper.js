// export const getCountryIcon = (countryName) => {
//   if (!countryName) return '';

//   const country = countries.find(
//     (c) => c.title.toLowerCase() === countryName.toLowerCase()
//   );
//   return country ? country.icon : '';
// };

// export const getCountryByID = (countryID) => {
//   if (!countryID) return undefined;

//   return countries.find((c) => c.value === countryID.toString());
// };

// export const getPhoneCodes = (countryOptions) => {
//   return [...countryOptions]
//     .sort((a, b) => {
//       const av = Number(a.other);
//       const bv = Number(b.other);
//       if (av < bv) return -1;
//       if (av > bv) return 1;
//       return 0;
//     })
//     .map((c) => ({
//       text: `+${c.other}`,
//       value: c.value,
//       icon: c.icon,
//       other: c.other,
//     }));
// };

// export const onCountryChanged = (setFormState, event) => {
//   const countryID = event.target.value;
//   setFormState((p) => ({
//     ...p,
//     values: {
//       ...p.values,
//       countryID,
//       phoneCode: countryID || p.values.phoneCode
//     },
//     touched: {
//       ...p.touched,
//       countryID: true
//     }
//   }));
// };
