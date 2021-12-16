// const { check, validationResult } = require("express-validator");
// exports.registervalidations = () => [
//   check("email").isEmail(),
//   check("Nom").notEmpty(),
//   check("Date_création").notEmpty(),
//   check("Secteur_activité").notEmpty(),
//   check("Implantation").notEmpty(),
//   check("numero").notEmpty().isLength(8),
//   check("Numéro_SIREN").notEmpty().isLength({ max: 9, min: 9 }),
//   check("Adresse").notEmpty(),
//   check("Statut_juridique").notEmpty(),
//   check("description").notEmpty(),
// ];
// exports.validationsComp = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   next();
// };
