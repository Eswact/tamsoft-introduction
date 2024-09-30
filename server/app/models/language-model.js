module.exports = mongoose => {
    const Language = mongoose.model(
      "languages",
      mongoose.Schema(
        {
            name: String,
            data: mongoose.Schema.Types.Mixed
        },
        { timestamps: true }
      )
    );
    return Language;
}