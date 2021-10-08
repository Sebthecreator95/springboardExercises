function snakeToCamel(var_name) {
    return var_name.replace(/([_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
          .replace('_', '');
      });
}

