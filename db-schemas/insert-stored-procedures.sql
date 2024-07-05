SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE InsertarProducto
	@name VARCHAR(50),
	@descripcion VARCHAR(200),
	@price DECIMAL(10,2),
	@availability BIT

AS
BEGIN
	SET NOCOUNT ON;
	INSERT INTO [dbo].[product] ([name], [description], [price], [availability], [createdAt], [updatedAt], [deletedAt])
		VALUES
			(@name, @descripcion, @price, @availability, GETDATE(), GETDATE(), NULL)
END
GO