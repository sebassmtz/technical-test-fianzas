
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE ActualizarProducto
	-- Add the parameters for the stored procedure here
	@id INT,
	@name VARCHAR(50),
	@descripcion VARCHAR(200),
	@price DECIMAL(10,2),
	@availability BIT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	UPDATE [dbo].[product]
	SET
		[name] = @name,
		[description] = @descripcion,
		[price] = @price,
		[availability] = @availability,
		[updatedAt] = GETDATE()
	WHERE
		[id] = @id;
END
GO
