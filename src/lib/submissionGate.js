exports.createSubmissionGate = function createSubmissionGate() {
  let locked = false;

  return {
    async run(operation) {
      if (locked) {
        return { skipped: true, result: null };
      }

      locked = true;
      try {
        const result = await operation();
        if (!result?.success) {
          locked = false;
        }
        return { skipped: false, result };
      } catch (error) {
        locked = false;
        throw error;
      }
    },
  };
};
