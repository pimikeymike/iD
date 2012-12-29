describe('iD.Node', function () {
    it("returns a node", function () {
        expect(iD.Node()).to.be.an.instanceOf(iD.Node);
        expect(iD.Node().type).to.equal("node");
    });

    it("returns a created Entity if no ID is specified", function () {
        expect(iD.Node().created()).to.be.ok;
    });

    it("returns an unmodified Entity if ID is specified", function () {
        expect(iD.Node({id: 'n1234'}).created()).not.to.be.ok;
        expect(iD.Node({id: 'n1234'}).modified()).not.to.be.ok;
    });

    it("defaults tags to an empty object", function () {
        expect(iD.Node().tags).to.eql({});
    });

    it("sets tags as specified", function () {
        expect(iD.Node({tags: {foo: 'bar'}}).tags).to.eql({foo: 'bar'});
    });

    describe("#extent", function() {
        it("returns a point extent", function() {
            expect(iD.Node({loc: [5, 10]}).extent()).to.eql([[5, 10], [5, 10]]);
        });
    });

    describe("#intersects", function () {
        it("returns true for a node within the given extent", function () {
            expect(iD.Node({loc: [0, 0]}).intersects([[-180, 90], [180, -90]])).to.equal(true);
        });

        it("returns false for a node outside the given extend", function () {
            expect(iD.Node({loc: [0, 0]}).intersects([[100, 90], [180, -90]])).to.equal(false);
        });
    });
});
