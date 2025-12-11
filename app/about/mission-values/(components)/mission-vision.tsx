const MissionVision = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              &ldquo;To use the media to enhance quality of life, make Nigeria a
              better country, and continue to flourish through the creation and
              delivery of quality media products.&rdquo;
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              &ldquo;To produce an award-winning publication that will continue to a
              have a positive impact on people&apos;s lives.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
